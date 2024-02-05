
using ElectronCgi.DotNet;
using CERSA.CORE.Controllers;
namespace CERSA.CORE.Bootstrap{
    public class App{
        protected Connection _connection {set;get;}
        public App(){
            _connection = new ConnectionBuilder()
                .WithLogging()
                .Build();
            LoadAllSource();
        }
        
        private void LoadAllSource(){
            _connection.On<int, string>(Constant.INIT, SampleController.InitCore);
            _connection.Listen();
        }
    }
}