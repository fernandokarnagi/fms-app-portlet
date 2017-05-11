package sg.com.ctcdemo.fms.portlet;

import java.io.IOException;

import javax.portlet.PortletException;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;

import com.liferay.util.bridges.mvc.MVCPortlet;

/**
 * Portlet implementation class FMSCleaningPerformanceDashboard
 */
public class FMSCleaningPerformanceDashboard extends MVCPortlet {

	@Override
	public void render(RenderRequest request, RenderResponse response) throws PortletException, IOException {
		System.out.println("render");
		System.out.println(request.getParameter("buildingId"));
		System.out.println(request.getParameter("month"));
		System.out.println(request.getParameter("year"));
		super.render(request, response); 
	}
 

}
