package sg.com.ctcdemo.fms.portlet;

import java.io.IOException;

import javax.portlet.PortletException;
import javax.portlet.PortletPreferences;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;

import com.liferay.portal.kernel.util.ParamUtil;
import com.liferay.portal.kernel.util.Validator;
import com.liferay.portlet.PortletPreferencesFactoryUtil;
import com.liferay.util.bridges.mvc.MVCPortlet;

/**
 * Portlet implementation class FMSCMChart
 */
public class FMSCMChart extends MVCPortlet {

	@Override
	public void doView(RenderRequest renderRequest, RenderResponse renderResponse) throws IOException, PortletException {

		PortletPreferences preferences = renderRequest.getPreferences();
		String divName = preferences.getValue("divName", "divName");
		String chartTitle = preferences.getValue("chartTitle", "chartTitle");
		
		System.out.println("divName: " + divName + ", chartTitle: " + chartTitle);
		
		super.doView(renderRequest, renderResponse);
	}

	@Override
	public void doEdit(RenderRequest renderRequest, RenderResponse renderResponse) throws IOException, PortletException {
		String divName = ParamUtil.getString(renderRequest, "divName");
		PortletPreferences preferences = renderRequest.getPreferences();
		String portletResource = ParamUtil.getString(renderRequest, "portletResource");
		String chartTitle = ParamUtil.getString(renderRequest, "chartTitle");

		System.out.println("divName: " + divName + ", chartTitle: " + chartTitle + ", portletResource: " + portletResource);

		if (Validator.isNotNull(divName) && Validator.isNotNull(chartTitle)) {
			try {
				preferences = PortletPreferencesFactoryUtil.getPortletSetup(renderRequest);
				System.out.println("preferences: " + preferences);
				preferences.setValue("divName", divName);
				preferences.setValue("chartTitle", chartTitle);
				preferences.store();
				System.out.println("Preferences Stored");
			} catch (Exception e) {
				e.printStackTrace();
			}
		}

		super.doEdit(renderRequest, renderResponse);
	}

}
