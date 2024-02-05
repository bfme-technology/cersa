
using ElectronCgi.DotNet;
using CERSA.CORE.Controllers;
namespace CERSA.CORE.Bootstrap{
    public static class Config{
        public static class Database{
            public static string DBPath = System.IO.Path.Join(BackendRoot,DBLocation);
            public static string DBLocation = "\\cersa\\database.db";

            public static string BackendRoot = Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData);

        }    
    }
    
}