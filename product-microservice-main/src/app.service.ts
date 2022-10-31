import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/product.dto';
import { ProductEntity } from './entity/product.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
  createProduct(productDto: CreateProductDto) {    
    return this.productRepository.save(productDto);
  }
  getProductById(id) {
    return this.productRepository.findOne(id);
  }
}
