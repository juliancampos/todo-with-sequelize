class Repository {
   constructor(name, model) {
      this.name = name;
      this.model = model;
      this.config();
   }

   async config() {
      this.model = await this.model();
   }
   
   async save(data) {
      const newData = new this.model(data);
      const result = await newData.save();
      return result;
   }
   
   async updateOne(_id, data) {
      const result = this.model.updateOne({ _id }, data);
      return result;
   }
   
   async findAll() {
      try {
         return this.model.findAll({});
      } catch (error) {
         console.log(error)
      }
   }
   
   async findOne(_id) {
      const result = this.model.findOne({ _id });
      return result;
   }
}

module.exports = (name, model) => new Repository(name, model);
