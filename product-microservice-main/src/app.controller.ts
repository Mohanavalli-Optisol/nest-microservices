import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern({ role: 'product', cmd: 'create' })
  createProduct(productDto) {
    const createData =  this.appService.createProduct(productDto);
    if(createData){
      return {
        status : 200 ,
        message: 'Product created successfully'
      }
    }else{
      return {
        status : 500 ,
        message: 'Something went wrong!'
      }
    }
    
  }

  @MessagePattern({ role: 'product', cmd: 'get-by-id' })
  getProductById(id: number) {
    return this.appService.getProductById(id);
  }
}