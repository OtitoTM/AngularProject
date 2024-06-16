import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Image {
  src: string;
  alt: string;
}
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
    images: Image[] = [
    { src: '../../assets/memory-8141642_640.jpg', alt: 'Memory' },
    { src: '../../assets/dvi-992630_640.jpg', alt: 'DVI Connector' },
    { src: '../../assets/board-453758_640.jpg', alt: 'Board' },
    { src: '../../assets/flash-memory-1306886_640.jpg', alt: 'Flash Memory' },
    { src: '../../assets/open-hard-drive-1200164_1280.jpg', alt: 'Open Hard Drive' },
    { src: '../../assets/turntable-1337986_640.jpg', alt: 'Turntable' }
  ];

  selectedImage: Image | null = null;
  cart: Image[] = [];
  message: string | null = null;

  handleImageClick(image: Image) {
    if (this.selectedImage === image) {
      if (confirm('Are you sure you want to add this item again?')) {
        this.addToCart();
      }
    } else {
      this.selectedImage = image;
    }
  }

  addToCart() {
    if (this.selectedImage) {
      this.cart.push(this.selectedImage);
      this.message = 'Item has been added to the cart!';
      console.log('Image added to cart:', this.selectedImage);
      console.log('Current cart:', this.cart);
      setTimeout(() => this.message = null, 3000); // Clear message after 3 seconds
      this.selectedImage = null; 
    } else {
      this.message = 'No item selected';
      setTimeout(() => this.message = null, 3000); // Clear message after 3 seconds
    }
  }
}