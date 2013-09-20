using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Organaizer.Models;
using System.Data;
using System.Data.Sql;
using System.Data.SqlClient;
using System.Data.SqlTypes;
using System.Security.Cryptography;
using System.Text;
using System.Web.SessionState;

namespace Organaizer.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        [HttpGet]
        public ViewResult Index()
        {
            return View();
        }

        [HttpPost]
        public ViewResult Index(IndexData form)
        {
            if (form.PLogon.JoinLogin != null && form.PLogon.JoinPassword != null)
            {
                SqlConnection con = new SqlConnection("Data Source = (local); Initial Catalog = WebDB; Integrated Security=true;");
                con.Open();

                MD5 crypt = MD5.Create();

                byte[] bytes = Encoding.Unicode.GetBytes(form.PLogon.JoinPassword);

                byte[] cryptBytes = crypt.ComputeHash(bytes);

                String hash = "";
                String log = form.PLogon.JoinLogin;
                foreach (byte b in cryptBytes)
                {
                    hash += string.Format("{0:x2}", b);
                }

                SqlCommand command = new SqlCommand("SELECT Login, Password FROM Users WHERE Login = '" + form.PLogon.JoinLogin + "' and Password = '" + hash + "';", con);

                command.CommandType = CommandType.Text;

                SqlDataAdapter adapter = new SqlDataAdapter();
                adapter.TableMappings.Add("Table", "Users");
                adapter.SelectCommand = command;

                DataSet ds = new DataSet();
                adapter.Fill(ds);

                if (ds.Tables[0].Rows.Count == 0)
                {
                    command.CommandText = "SELECT EMail, Password FROM Users WHERE Login = '" + form.PLogon.JoinLogin + "' and Password = '" + hash + "';";

                    adapter.SelectCommand = command;

                    adapter.Fill(ds);

                    if (ds.Tables[0].Rows.Count == 0)
                    {
                        return View();
                    }
                    else
                    {
                        command.CommandText = "SELECT Login FROM Users WHERE EMail = '" + form.PLogon.JoinLogin + "';";

                        adapter.SelectCommand = command;

                        adapter.Fill(ds);

                        if (ds.Tables[0].Rows.Count == 0)
                        {
                            return View();
                        }
                        else
                        {
                            form.PLogon.JoinLogin = ds.Tables[0].Rows[0][0].ToString();

                            Session["Login"] = form.PLogon.JoinLogin;

                            form.PLogon = null;

                            return View("Logined", form);
                        }
                    }
                }
                else
                {
                    Session["Login"] = form.PLogon.JoinLogin;

                    form.PLogon = null;

                    return View("Logined", form);
                }

                con.Close();
            }


            ////PRegistration

            if (form.PRegistration.Login != null && form.PRegistration.Password != null && form.PRegistration.ConfirmPassword != null && form.PRegistration.Email != null)
            {
                SqlConnection con = new SqlConnection("Data Source = (local); Initial Catalog = WebDB; Integrated Security=true;");
                con.Open();
                MD5 crypt = MD5.Create();

                byte[] bytes = Encoding.Unicode.GetBytes(form.PRegistration.Password);

                byte[] cryptBytes = crypt.ComputeHash(bytes);

                String hash = "";
                foreach (byte b in cryptBytes)
                {
                    hash += string.Format("{0:x2}", b);
                }

                String query = "INSERT INTO Users ( Login, Password, EMail) VALUES ('" + form.PRegistration.Login + "', '" + hash + "', '" + form.PRegistration.Email + "');";

                SqlCommand command = new SqlCommand(query, con);
                command.CommandType = CommandType.Text;
                command.CommandText = query;
                command.ExecuteNonQuery();

                con.Close();
                Session["Login"] = form.PRegistration.Login;

                form.PRegistration = null;

                return View("RegistrationConfirmed", form);
            }
            else
            {
                return View();
            }
        }
    }
}
