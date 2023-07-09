import { ItemDto } from 'src/dto/ItemDto';
import { ItemsService } from './items.service';
import { Item } from 'src/iterfaces/Item';
export declare class ItemsController {
    private readonly itemService;
    constructor(itemService: ItemsService);
    findOne(id: any): Item;
    createItem(itemDto: ItemDto): string;
    deleteItem(id: any): string;
    updateItem(updateItemDto: ItemDto, id: any): string;
}
