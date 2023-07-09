import { ItemDto } from 'src/dto/ItemDto';
import { Item } from 'src/iterfaces/Item';
export declare class ItemsService {
    private readonly items;
    getOneItem(id: number): Item;
    createItem(item: ItemDto): string;
}
