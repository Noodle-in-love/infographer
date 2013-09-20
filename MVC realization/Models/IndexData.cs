using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Organaizer.Models
{
    public class IndexData
    {
        private Logon Logon = new Logon();
        
        public Logon PLogon 
        { 
            get 
            {
                return Logon;
            }
            set
            {
                Logon = value;
            }
        }

        private Registration Registration = new Registration();

        public Registration PRegistration
        {
            get
            {
                return Registration;
            }
            set
            {
                Registration = value;
            }
        }
    }
}