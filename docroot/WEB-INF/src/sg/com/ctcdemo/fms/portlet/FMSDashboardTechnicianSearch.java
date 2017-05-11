package sg.com.ctcdemo.fms.portlet;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import javax.portlet.ActionRequest;
import javax.portlet.ActionResponse;
import javax.portlet.PortletSession;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.json.JSONObject;

import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;
import com.liferay.portal.kernel.util.ParamUtil;
import com.liferay.util.bridges.mvc.MVCPortlet;

/**
 * Portlet implementation class FMSDashboardTechnicianSearch
 */
public class FMSDashboardTechnicianSearch extends MVCPortlet {

	private static Log _log = LogFactoryUtil.getLog(FMSDashboardTechnicianSearch.class);
	private static String GCM_TITLE = "Resource Locator";
	private static String GCM_MESSAGE = "Check In your Location";

	public void setPropertySearchParamsToSession(ActionRequest request, ActionResponse response) throws Exception {

		_log.info("setPropertySearchParamsToSession Called ");

		String name = ParamUtil.getString(request, "name");
		String address = ParamUtil.getString(request, "address");

		_log.info("name : " + name + " address :" + address);

		PortletSession session = request.getPortletSession();

		session.setAttribute("selectedName", name, PortletSession.APPLICATION_SCOPE);
		session.setAttribute("selectedAddress", address, PortletSession.APPLICATION_SCOPE);

		response.setRenderParameter("jspPage", "/html/fmsdashboardtechniciansearch/PropertyPopup.jsp");
	}

	public void trackResources(ActionRequest request, ActionResponse response) throws Exception {
		_log.info("Start - trackResources ");

		String buildingId = ParamUtil.getString(request, "buildingId");
		_log.info("buildingId :" + buildingId);

		String applicationType = ParamUtil.getString(request, "applicationType");

		if (applicationType == null || applicationType == "") {
			applicationType = "CM";
		}
		sendFCM();

		_log.info("End - trackResources ");

	}

	public static void main(String args[]) {
		try {
			new FMSDashboardTechnicianSearch().sendFCM();
		} catch (Exception ex) {
			ex.printStackTrace();
		}
	}

	public void sendFCM() throws Exception {
		JSONObject obj = new JSONObject();
		JSONObject data = new JSONObject();
		obj.put("to", "/topics/resourcelocator");

		data.put("title", "Location Update");
		data.put("text", "Location Update");

		HttpClient httpClient = new DefaultHttpClient();
		HttpPost post = new HttpPost("https://fcm.googleapis.com/fcm/send");
		post.setHeader("Content-Type", "application/json");
		post.setHeader("Authorization",
				"key= AAAAtVxp97M:APA91bGv0O7qr9_S0VRDSXpxPIM3Mq42RFx2PUGB0xRlJeVE00bECjku9zNqSg20LH5CjiZdZP3b7jC-dk4DMLBCz9uyE7ggDKq_EFsaGzmvYr9x5pka8zPJXCdepnpxXOOjZ3Zkhp2u");

		String json = obj.toString();
		StringEntity entity = new StringEntity(json);
		post.setEntity(entity);

		HttpResponse response = httpClient.execute(post);
		System.out.println("Sending...");
		BufferedReader br = null;
		StringBuilder sb = new StringBuilder();

		String line;
		try {
			br = new BufferedReader(new InputStreamReader(response.getEntity().getContent()));
			System.out.println("Parsing line..");
			while ((line = br.readLine()) != null) {
				System.out.println("Parsing line.. - " + line);
				sb.append(line);
			}
		} catch (IOException e) {
			_log.error(e);
		} finally {
			if (br != null) {
				try {
					br.close();
				} catch (IOException e) {
					_log.error(e);
				}
			}
		}
	}
}
