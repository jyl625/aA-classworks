module ApplicationHelper

  def auth_token
    # '<input type="hidden" name="authenticity_token" value="<%=form_authenticity_token%>">'.html_safe #sometimes doesn't work
    # "<input type=\"hidden\" name=\"authenticity_token\" value=\"<%=form_authenticity_token%>\">".html_safe #sometimes doesn't works
    # "<input type=\"hidden\" name=\"authenticity_token\" value=\"#{form_authenticity_token}\">".html_safe #Always works
    return '<input type="hidden" name="authenticity_token" value="<%= form_authenticity_token %>"/>'.html_safe 
  end
end
