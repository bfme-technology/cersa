namespace CERSA.Core.Operations{
    class SampleOperation{
        public SampleOperation(){
            Database=new Database.DatabaseContext();
        }
        public Database.DatabaseContext Database { set; get; }
        public string GetHelloName(int id){
            //return "Hello "+GetNameByID(id)+"!";
            return "Hello World!";
        }
        public string GetNameByID(int id){
            var name = string.Empty;
            var data = Database.tbl_sample.Where(a=>a.SampleID==id).FirstOrDefault();
            if(!String.IsNullOrEmpty(data?.Name)){
                name = data.Name;
            }
            return name;
        }

    }
}