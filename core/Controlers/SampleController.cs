using CERSA.CORE.Operations;

namespace CERSA.CORE.Controllers{
    public static class SampleController{
        static SampleOperation Operation; 
        static SampleController(){
            Operation = new SampleOperation();
        }
        public static string InitCore(int arg){
            return Operation.GetHelloName(arg);
        }
    }
}