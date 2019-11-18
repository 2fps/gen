// import * as mongoose from 'mongoose';

// export const HitSchema = new mongoose.Schema({
//   path: String,
//   count: Number,
// });

// HitSchema.statics.hitIt = async function(path: string) {
//   let value = await this.findIt(path);

//   if (value) {
//     await this.updateIt(path, value.count);
//   } else {
//     await this.createIt(path);
//   }

//   return value ? value.count : 1;
// }

// HitSchema.statics.createIt = async function(path: string) {
//   return this.create({
//     path,
//     count: 1,
//   });
// }

// HitSchema.statics.updateIt = async function(path: string, count: number) {
//   return this.updateOne({
//     path,
//   }, {
//     count: ++count
//   });
// }

// HitSchema.statics.findIt = async function(path: string) {
//   return this.findOne({
//     path
//   }, {
//     _id: 0,
//     __v: 0,
//   }).exec();
// }