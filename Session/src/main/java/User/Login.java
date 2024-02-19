package User;

import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import java.sql.*;

/**
 * Servlet implementation class Login
 */
@WebServlet("/login")
public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;
	Connection con;

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
		String lemail = request.getParameter("lemail");
		String lpwd = request.getParameter("lpwd");

		HttpSession session = request.getSession();
		RequestDispatcher dispatcher = null;
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
			con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:orcl", "MAJOR_PROJECT", "1133440");
			PreparedStatement pstmt = con.prepareStatement("SELECT * FROM REGISTER WHERE EMAIL=? and PASSWORD =?");
			pstmt.setString(1, lemail);
			pstmt.setString(2, lpwd);
			if (lemail.isEmpty() && lpwd.isEmpty()) {
				request.setAttribute("status1", "failed");
				dispatcher = request.getRequestDispatcher("index.jsp");
			}
			if (lpwd.length() < 8) {
				request.setAttribute("status1", "failed");
				dispatcher = request.getRequestDispatcher("index.jsp");
			}
			ResultSet rs = pstmt.executeQuery();
			if (rs.next()) {
				PreparedStatement pstmt2= con.prepareStatement("update register set status=? where email =?");
				pstmt2.setString(1,"online");
				pstmt2.setString(2, lemail);
				pstmt2.executeUpdate();
				String fullname = rs.getString("fname").concat(" ").concat(rs.getString("lname"));
				session.setAttribute("name", fullname);
				session.setAttribute("email", rs.getString("email"));
				/* dispatcher = request.getRequestDispatcher("main.jsp"); */
				response.sendRedirect("main.jsp");
			} else {
				request.setAttribute("status1", "failed");
				dispatcher = request.getRequestDispatcher("index.jsp");
				/* response.sendRedirect("index.jsp"); */
			}
			dispatcher.forward(request, response);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

}
