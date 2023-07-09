/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ItemDto } from 'src/dto/ItemDto';
import { Item } from 'src/iterfaces/Item';
import { Model } from 'mongoose';
import { Item as ItemModel } from 'src/schemas/items.schema';

@Injectable()
export class ItemsService {

    // constructor(@InjectModel(ItemModel.name) private itemModel: Model<ItemModel>) { };

    private readonly items: Item[] = [
        {
            id: '1213434',
            name: "Item One",
            description: "This is item one",
            quantity: 2
        },
        {
            id: '8976870',
            name: "Item Two",
            description: "This is item two",
            quantity: 5
        }
    ]

    // async getAllItems(): Promise<ItemModel[]>{
    //     return this.itemModel.find().exec();
    // }

    getOneItem(id: number): Item {
        return this.items[id];
    }

    createItem(item: ItemDto): string {
        const newItem: Item = {
            id: "75765454",
            name: item.name,
            description: item.description,
            quantity: item.quatity
        }

        this.items.push(newItem);

        return "Item created successful";
    }
}
