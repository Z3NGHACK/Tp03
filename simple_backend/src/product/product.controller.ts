import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ProductsService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import * as multer from 'multer';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';

const multerOptions: MulterOptions = {
  storage: multer.diskStorage({
    destination: './uploads/product',
    filename: (req, file, callback) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      callback(null, uniqueSuffix + '-' + file.originalname);
    },
  }),
  limits: {
    fileSize: 1 * 1024 * 1024, // Limit file size to 1MB
  },
};

@Controller('api/products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  findAll(): any {
    return this.productService.findAll();
  }

  @Post()
  @UseInterceptors(FilesInterceptor('images', 10, multerOptions))
  createProduct(
    @UploadedFiles() images: Array<Express.Multer.File>,
    @Body() body: any,
  ): any {
    const imagesPath = [];
    if (images) {
      for (const image of images) {
        imagesPath.push(image.path);
      }
    }
    console.log('imagesPath', imagesPath);
    const product = this.productService.create({
      ...body,
      image: JSON.stringify(imagesPath),
    });
    return product;
  }
}
