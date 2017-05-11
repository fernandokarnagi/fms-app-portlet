package sg.com.ctcdemo.fms.portlet;

import java.io.IOException;

import javax.portlet.PortletException;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;

import com.liferay.util.bridges.mvc.MVCPortlet;

/**
 * Portlet implementation class FMSHomePortlet
 */
public class FMSHomePortlet extends MVCPortlet {

	@Override
	public void render(RenderRequest request, RenderResponse response) throws PortletException, IOException {
		
		
		//RoleServiceUtil.hasUserRole(userId, companyId, name, inherited);
		super.render(request, response);
	}
 

	 
}
