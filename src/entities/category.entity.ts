import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CategoryDocument = HydratedDocument<Category>;

@Schema()
export class Category {
  @Prop({ required: true })
  category_name: string;

  @Prop({ required: true })
  category_description: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
