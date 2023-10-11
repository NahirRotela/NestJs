// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  private products = [
    {
      id: 1,
      name: 'Producto 1',
      description: 'Modulos Oled',
      precio: 1000,
      stock: 10,
    },
    {
      id: 2,
      name: 'Producto 1',
      description: 'Modulos one edition',
      precio: 2000,
      stock: 20,
    },
    {
      id: 3,
      name: 'Producto 1',
      description: 'Modulo Generico',
      precio: 3000,
      stock: 30,
    },
  ];

  constructor(private readonly appService: AppService) {}

  @Get('products/:id')
  getProduct(@Param('id') id: number): any {
    return this.products.find((product) => product.id === +id);
  }

  @Get('products')
  getProducts(): any {
    return this.products;
  }

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  // @Get('/product')
  // getProduct(): string {
  //   return 'Productos';
  // }
  @Post()
  sendData(@Body() products): any {
    this.products = [...this.products, products];

    return products;
  }

  @Put('products/:id')
  updateProduct(@Param('id') id: number, @Body() updatedProduct): any {
    const productIndex = this.products.findIndex(
      (product) => product.id === id,
    );

    if (productIndex === -1) {
      return { message: `Producto con ID ${id} no encontrado` };
    }

    // Actualiza el producto con los nuevos datos
    this.products[productIndex] = {
      ...this.products[productIndex],
      ...updatedProduct,
    };

    return this.products[productIndex];
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: number): any {
    const productIndex = this.products.findIndex(
      (product) => product.id === id,
    );

    if (productIndex === -1) {
      return { message: `Producto con ID ${id} no encontrado` };
    }

    // Elimina el producto del arreglo
    this.products.splice(productIndex, 1);

    return { message: `Producto eliminado con ID ${id}` };
  }
}
