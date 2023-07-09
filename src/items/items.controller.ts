/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Delete, Put, Body, Param, Req, Redirect, UsePipes } from '@nestjs/common';
import { ItemDto } from 'src/dto/ItemDto';
import { ItemsService } from './items.service';
import { Item } from 'src/iterfaces/Item';
import { request } from 'http';
import Joi from 'joi';
import { JoiValidationPipe } from 'src/pipes/validation.pipe';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemService: ItemsService) { }

    private createItemSchema = Joi.object({
        name : Joi.string().required(),
        description : Joi.string().required(),
        quatity : Joi.number().required()
    })
    // @Get()
    // // @Redirect('http://localhost:3000/items/redirected')
    // findAll(@Req() request: Request): Promise<Item[]>{
    //     console.log(request);
    //     return this.itemService.getAllItems();
    // }

    // @Get('redirected')
    // redirectedResource(): string{
    //     return "This is redirected page";
    // }

    @Get(':id')
    findOne(@Param('id') id): Item {
        return this.itemService.getOneItem(id);
    }

    @Post('create')
    createItem(@Body() itemDto: ItemDto): string {
        console.log("Item name is : " + itemDto.name);
        console.log("Item description is : " + itemDto.description);
        console.log("item quatity is : " + itemDto.quatity);

        return this.itemService.createItem(itemDto);
    }

    @Delete('delete/:id')
    deleteItem(@Param('id') id : number): string {
        return `Item ${id} is deleted`;
    }

    @Put('update/:id')
    updateItem(@Body() updateItemDto: ItemDto, @Param('id') id): string {
        return `Item ${id} with name ${updateItemDto.name} is updated`;
    }
}
