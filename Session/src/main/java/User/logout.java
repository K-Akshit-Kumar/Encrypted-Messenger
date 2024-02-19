package User;

import java.io.IOException;
import java.sql.*;
import java.sql.PreparedStatement;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import java.util.Date;

@WebServlet("/logout")
public class logout extends HttpServlet {
	private static final long serialVersionUID = 1L;
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
			Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:orcl","major_project","1133440");
			HttpSession session = request.getSession();
			String d =new Date().toString();
			
			/*
			 * Date d = new Date(); int day = d.getDate(); int month = d.getMonth(); int
			 * year = d.();
			 */
			/*
			 * @SuppressWarnings("deprecation") int h = d.getHours();
			 * 
			 * @SuppressWarnings("deprecation") int m = d.getMinutes(); String am = "am";
			 */
		PreparedStatement pstmt = con.prepareStatement("update register set status = ? where email=?");
		String email = (String) session.getAttribute("email");
		/*
		 * if(h>12) { h=h-12; am="pm"; }
		 */
//		String time = h+":"+m+" "+am+" "+day+"/"+month+"/"+year;
		String time = new Date().toString();
		
		
		pstmt.setString(1, time);
		pstmt.setString(2, email);
		pstmt.executeUpdate();
		session.setAttribute("name", null);
		session.setAttribute("email", null);
		session.invalidate();
		response.sendRedirect("main.jsp");
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
}
