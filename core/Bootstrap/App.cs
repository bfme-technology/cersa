
using ElectronCgi.DotNet;
using CERSA.Core.Controllers;
namespace CERSA.Core.Bootstrap{
    public class App{
        protected Connection _connection {set;get;}
        public App(){
            _connection = new ConnectionBuilder()
                .WithLogging()
                .Build();
            LoadAllSource();
        }
        
        private void LoadAllSource(){
            DotNetEnv.Env.Load();
            // SampleController.InitCore(1);

            _connection.On<int, string>(Constant.INIT, SampleController.InitCore);
            _connection.Listen();
        }
    }
}