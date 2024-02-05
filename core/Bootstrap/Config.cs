
using ElectronCgi.DotNet;
using CERSA.Core.Controllers;
using DotNetEnv;
using System.Collections.Immutable;
namespace CERSA.Core.Bootstrap{
    public static class Config{
        public static class Database{
            static Database(){
                Configuration = Env.Load();
                Configuration.ToString();
                var config = Configuration;
            }
            public static IEnumerable<System.Collections.Generic.KeyValuePair<string, string>> Configuration;
            public static string DBPath = Path.Join(BackendRoot,DBLocation);
            public static string DBLocation =  "\\cersa\\database.db";

            public static string BackendRoot = Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData);

        }    
    }
    
}