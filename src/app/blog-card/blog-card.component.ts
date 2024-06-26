import { AlertifyMessageService } from './../services/alertify-message.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogCard } from './BlogCard';
import { SearchBlogFilterPipe } from '../custom-pipe/search-blog-filter.pipe';
import { FormsModule } from '@angular/forms';

// Custom Pipeline

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [CommonModule, RouterLink, SearchBlogFilterPipe, FormsModule],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.css',
})
export class BlogCardComponent implements OnInit {

  dataFilterBlogCategory="";

  // Constructor
  constructor(private alertifyMessageService: AlertifyMessageService) {}

  ngOnInit(): void {
    this.alertifyMessageService.alertMessage('Blog Sayfası');
  }


  // Blog
  // image Link:
  blogCard: BlogCard[] = [
    {
      id: 1,
      title: 'Angular Eğitimi -1',
      picture:
        'https://cdn.pixabay.com/photo/2024/02/09/13/03/beach-8563083_1280.jpg',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus molestias assumenda, quisquam possimus iste quidem. Tenetur voluptatem dolorum vero, dolores id distinctio minus officiis. Natus ex reiciendis consectetur ab deleniti.Corrupti, facere necessitatibus nostrum unde maiores labore quos! Consequuntur inventore quia, facilis voluptatibus eligendi ipsam ullam consectetur alias odit, iste illum eaque in sequi aliquam, est vitae voluptatem deserunt modi.Itaque rerum dignissimos quidem. Aspernatur asperiores ipsum blanditiis voluptatibus porro distinctio, dicta veniam vero excepturi dolore quasi culpa repudiandae iure, nobis velit eligendi quaerat ipsa. Accusamus nobis tenetur enim alias.Nesciunt nihil quis dicta dignissimos veniam. Molestias facilis amet eveniet ipsa consequuntur, ad aspernatur? Accusamus sequi dolor enim culpa repellendus quisquam eaque dolorum similique nemo eos aut, dolores ex ipsam?',
      date: String(new Date()),
      link: 'blog',
      categoryName: 'frontend',
    },
    {
      id: 2,
      title: 'Angular Eğitimi -2',
      picture:
        'https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_960_720.jpg',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus molestias assumenda, quisquam possimus iste quidem. Tenetur voluptatem dolorum vero, dolores id distinctio minus officiis. Natus ex reiciendis consectetur ab deleniti.Corrupti, facere necessitatibus nostrum unde maiores labore quos! Consequuntur inventore quia, facilis voluptatibus eligendi ipsam ullam consectetur alias odit, iste illum eaque in sequi aliquam, est vitae voluptatem deserunt modi.Itaque rerum dignissimos quidem. Aspernatur asperiores ipsum blanditiis voluptatibus porro distinctio, dicta veniam vero excepturi dolore quasi culpa repudiandae iure, nobis velit eligendi quaerat ipsa. Accusamus nobis tenetur enim alias.Nesciunt nihil quis dicta dignissimos veniam. Molestias facilis amet eveniet ipsa consequuntur, ad aspernatur? Accusamus sequi dolor enim culpa repellendus quisquam eaque dolorum similique nemo eos aut, dolores ex ipsam?',
      date: String(new Date()),
      link: 'blog',
      categoryName: 'devops',
    },
    {
      id: 3,
      title: 'Angular Eğitimi -3',
      picture:
        'https://cdn.pixabay.com/photo/2015/05/31/15/07/coffee-792113_640.jpg',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus molestias assumenda, quisquam possimus iste quidem. Tenetur voluptatem dolorum vero, dolores id distinctio minus officiis. Natus ex reiciendis consectetur ab deleniti.Corrupti, facere necessitatibus nostrum unde maiores labore quos! Consequuntur inventore quia, facilis voluptatibus eligendi ipsam ullam consectetur alias odit, iste illum eaque in sequi aliquam, est vitae voluptatem deserunt modi.Itaque rerum dignissimos quidem. Aspernatur asperiores ipsum blanditiis voluptatibus porro distinctio, dicta veniam vero excepturi dolore quasi culpa repudiandae iure, nobis velit eligendi quaerat ipsa. Accusamus nobis tenetur enim alias.Nesciunt nihil quis dicta dignissimos veniam. Molestias facilis amet eveniet ipsa consequuntur, ad aspernatur? Accusamus sequi dolor enim culpa repellendus quisquam eaque dolorum similique nemo eos aut, dolores ex ipsam?',
      date: String(new Date()),
      link: 'blog',
      categoryName: 'frontend',
    },
    {
      id: 4,
      title: 'Angular Eğitimi -4',
      picture:
        'https://cdn.pixabay.com/photo/2024/02/09/13/03/beach-8563083_1280.jpg',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus molestias assumenda, quisquam possimus iste quidem. Tenetur voluptatem dolorum vero, dolores id distinctio minus officiis. Natus ex reiciendis consectetur ab deleniti.Corrupti, facere necessitatibus nostrum unde maiores labore quos! Consequuntur inventore quia, facilis voluptatibus eligendi ipsam ullam consectetur alias odit, iste illum eaque in sequi aliquam, est vitae voluptatem deserunt modi.Itaque rerum dignissimos quidem. Aspernatur asperiores ipsum blanditiis voluptatibus porro distinctio, dicta veniam vero excepturi dolore quasi culpa repudiandae iure, nobis velit eligendi quaerat ipsa. Accusamus nobis tenetur enim alias.Nesciunt nihil quis dicta dignissimos veniam. Molestias facilis amet eveniet ipsa consequuntur, ad aspernatur? Accusamus sequi dolor enim culpa repellendus quisquam eaque dolorum similique nemo eos aut, dolores ex ipsam?',
      date: String(new Date()),
      link: 'blog',
      categoryName: 'mobil',
    },
    {
      id: 5,
      title: 'Angular Eğitimi -5',
      picture:
        'https://cdn.pixabay.com/photo/2024/02/09/13/03/beach-8563083_1280.jpg',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus molestias assumenda, quisquam possimus iste quidem. Tenetur voluptatem dolorum vero, dolores id distinctio minus officiis. Natus ex reiciendis consectetur ab deleniti.Corrupti, facere necessitatibus nostrum unde maiores labore quos! Consequuntur inventore quia, facilis voluptatibus eligendi ipsam ullam consectetur alias odit, iste illum eaque in sequi aliquam, est vitae voluptatem deserunt modi.Itaque rerum dignissimos quidem. Aspernatur asperiores ipsum blanditiis voluptatibus porro distinctio, dicta veniam vero excepturi dolore quasi culpa repudiandae iure, nobis velit eligendi quaerat ipsa. Accusamus nobis tenetur enim alias.Nesciunt nihil quis dicta dignissimos veniam. Molestias facilis amet eveniet ipsa consequuntur, ad aspernatur? Accusamus sequi dolor enim culpa repellendus quisquam eaque dolorum similique nemo eos aut, dolores ex ipsam?',
      date: String(new Date()),
      link: 'blog',
      categoryName: 'devops',
    },
    {
      id: 6,
      title: 'Angular Eğitimi -6',
      picture:
        'https://cdn.pixabay.com/photo/2024/02/09/13/03/beach-8563083_1280.jpg',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus molestias assumenda, quisquam possimus iste quidem. Tenetur voluptatem dolorum vero, dolores id distinctio minus officiis. Natus ex reiciendis consectetur ab deleniti.Corrupti, facere necessitatibus nostrum unde maiores labore quos! Consequuntur inventore quia, facilis voluptatibus eligendi ipsam ullam consectetur alias odit, iste illum eaque in sequi aliquam, est vitae voluptatem deserunt modi.Itaque rerum dignissimos quidem. Aspernatur asperiores ipsum blanditiis voluptatibus porro distinctio, dicta veniam vero excepturi dolore quasi culpa repudiandae iure, nobis velit eligendi quaerat ipsa. Accusamus nobis tenetur enim alias.Nesciunt nihil quis dicta dignissimos veniam. Molestias facilis amet eveniet ipsa consequuntur, ad aspernatur? Accusamus sequi dolor enim culpa repellendus quisquam eaque dolorum similique nemo eos aut, dolores ex ipsam?',
      date: String(new Date()),
      link: 'blog',
      categoryName: 'devops',
    },
    {
      id: 7,
      title: 'Angular Eğitimi -7',
      picture:
        'https://cdn.pixabay.com/photo/2024/02/09/13/03/beach-8563083_1280.jpg',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus molestias assumenda, quisquam possimus iste quidem. Tenetur voluptatem dolorum vero, dolores id distinctio minus officiis. Natus ex reiciendis consectetur ab deleniti.Corrupti, facere necessitatibus nostrum unde maiores labore quos! Consequuntur inventore quia, facilis voluptatibus eligendi ipsam ullam consectetur alias odit, iste illum eaque in sequi aliquam, est vitae voluptatem deserunt modi.Itaque rerum dignissimos quidem. Aspernatur asperiores ipsum blanditiis voluptatibus porro distinctio, dicta veniam vero excepturi dolore quasi culpa repudiandae iure, nobis velit eligendi quaerat ipsa. Accusamus nobis tenetur enim alias.Nesciunt nihil quis dicta dignissimos veniam. Molestias facilis amet eveniet ipsa consequuntur, ad aspernatur? Accusamus sequi dolor enim culpa repellendus quisquam eaque dolorum similique nemo eos aut, dolores ex ipsam?',
      date: String(new Date()),
      link: 'blog',
      categoryName: 'frontend',
    },
    {
      id: 8,
      title: 'Angular Eğitimi -8',
      picture:
        'https://cdn.pixabay.com/photo/2024/02/09/13/03/beach-8563083_1280.jpg',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus molestias assumenda, quisquam possimus iste quidem. Tenetur voluptatem dolorum vero, dolores id distinctio minus officiis. Natus ex reiciendis consectetur ab deleniti.Corrupti, facere necessitatibus nostrum unde maiores labore quos! Consequuntur inventore quia, facilis voluptatibus eligendi ipsam ullam consectetur alias odit, iste illum eaque in sequi aliquam, est vitae voluptatem deserunt modi.Itaque rerum dignissimos quidem. Aspernatur asperiores ipsum blanditiis voluptatibus porro distinctio, dicta veniam vero excepturi dolore quasi culpa repudiandae iure, nobis velit eligendi quaerat ipsa. Accusamus nobis tenetur enim alias.Nesciunt nihil quis dicta dignissimos veniam. Molestias facilis amet eveniet ipsa consequuntur, ad aspernatur? Accusamus sequi dolor enim culpa repellendus quisquam eaque dolorum similique nemo eos aut, dolores ex ipsam?',
      date: String(new Date()),
      link: 'blog',
      categoryName: 'backend',
    },
    {
      id: 9,
      title: 'Angular Eğitimi -9',
      picture:
        'https://cdn.pixabay.com/photo/2024/02/09/13/03/beach-8563083_1280.jpg',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus molestias assumenda, quisquam possimus iste quidem. Tenetur voluptatem dolorum vero, dolores id distinctio minus officiis. Natus ex reiciendis consectetur ab deleniti.Corrupti, facere necessitatibus nostrum unde maiores labore quos! Consequuntur inventore quia, facilis voluptatibus eligendi ipsam ullam consectetur alias odit, iste illum eaque in sequi aliquam, est vitae voluptatem deserunt modi.Itaque rerum dignissimos quidem. Aspernatur asperiores ipsum blanditiis voluptatibus porro distinctio, dicta veniam vero excepturi dolore quasi culpa repudiandae iure, nobis velit eligendi quaerat ipsa. Accusamus nobis tenetur enim alias.Nesciunt nihil quis dicta dignissimos veniam. Molestias facilis amet eveniet ipsa consequuntur, ad aspernatur? Accusamus sequi dolor enim culpa repellendus quisquam eaque dolorum similique nemo eos aut, dolores ex ipsam?',
      date: String(new Date()),
      link: 'blog',
      categoryName: 'frontend',
    },
    {
      id: 10,
      title: 'Angular Eğitimi -10',
      picture:
        'https://cdn.pixabay.com/photo/2024/02/09/13/03/beach-8563083_1280.jpg',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus molestias assumenda, quisquam possimus iste quidem. Tenetur voluptatem dolorum vero, dolores id distinctio minus officiis. Natus ex reiciendis consectetur ab deleniti.Corrupti, facere necessitatibus nostrum unde maiores labore quos! Consequuntur inventore quia, facilis voluptatibus eligendi ipsam ullam consectetur alias odit, iste illum eaque in sequi aliquam, est vitae voluptatem deserunt modi.Itaque rerum dignissimos quidem. Aspernatur asperiores ipsum blanditiis voluptatibus porro distinctio, dicta veniam vero excepturi dolore quasi culpa repudiandae iure, nobis velit eligendi quaerat ipsa. Accusamus nobis tenetur enim alias.Nesciunt nihil quis dicta dignissimos veniam. Molestias facilis amet eveniet ipsa consequuntur, ad aspernatur? Accusamus sequi dolor enim culpa repellendus quisquam eaque dolorum similique nemo eos aut, dolores ex ipsam?',
      date: String(new Date()),
      link: 'blog',
      categoryName: 'frontend',
    },
    {
      id: 11,
      title: 'Angular Eğitimi -11',
      picture:
        'https://cdn.pixabay.com/photo/2024/02/09/13/03/beach-8563083_1280.jpg',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus molestias assumenda, quisquam possimus iste quidem. Tenetur voluptatem dolorum vero, dolores id distinctio minus officiis. Natus ex reiciendis consectetur ab deleniti.Corrupti, facere necessitatibus nostrum unde maiores labore quos! Consequuntur inventore quia, facilis voluptatibus eligendi ipsam ullam consectetur alias odit, iste illum eaque in sequi aliquam, est vitae voluptatem deserunt modi.Itaque rerum dignissimos quidem. Aspernatur asperiores ipsum blanditiis voluptatibus porro distinctio, dicta veniam vero excepturi dolore quasi culpa repudiandae iure, nobis velit eligendi quaerat ipsa. Accusamus nobis tenetur enim alias.Nesciunt nihil quis dicta dignissimos veniam. Molestias facilis amet eveniet ipsa consequuntur, ad aspernatur? Accusamus sequi dolor enim culpa repellendus quisquam eaque dolorum similique nemo eos aut, dolores ex ipsam?',
      date: String(new Date()),
      link: 'blog',
      categoryName: 'backend',
    },
    {
      id: 12,
      title: 'Angular Eğitimi -12',
      picture:
        'https://cdn.pixabay.com/photo/2024/02/09/13/03/beach-8563083_1280.jpg',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus molestias assumenda, quisquam possimus iste quidem. Tenetur voluptatem dolorum vero, dolores id distinctio minus officiis. Natus ex reiciendis consectetur ab deleniti.Corrupti, facere necessitatibus nostrum unde maiores labore quos! Consequuntur inventore quia, facilis voluptatibus eligendi ipsam ullam consectetur alias odit, iste illum eaque in sequi aliquam, est vitae voluptatem deserunt modi.Itaque rerum dignissimos quidem. Aspernatur asperiores ipsum blanditiis voluptatibus porro distinctio, dicta veniam vero excepturi dolore quasi culpa repudiandae iure, nobis velit eligendi quaerat ipsa. Accusamus nobis tenetur enim alias.Nesciunt nihil quis dicta dignissimos veniam. Molestias facilis amet eveniet ipsa consequuntur, ad aspernatur? Accusamus sequi dolor enim culpa repellendus quisquam eaque dolorum similique nemo eos aut, dolores ex ipsam?',
      date: String(new Date()),
      link: 'blog',
      categoryName: 'mobil',
    },
    {
      id: 13,
      title: 'Angular Eğitimi -13',
      picture:
        'https://cdn.pixabay.com/photo/2024/02/09/13/03/beach-8563083_1280.jpg',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus molestias assumenda, quisquam possimus iste quidem. Tenetur voluptatem dolorum vero, dolores id distinctio minus officiis. Natus ex reiciendis consectetur ab deleniti.Corrupti, facere necessitatibus nostrum unde maiores labore quos! Consequuntur inventore quia, facilis voluptatibus eligendi ipsam ullam consectetur alias odit, iste illum eaque in sequi aliquam, est vitae voluptatem deserunt modi.Itaque rerum dignissimos quidem. Aspernatur asperiores ipsum blanditiis voluptatibus porro distinctio, dicta veniam vero excepturi dolore quasi culpa repudiandae iure, nobis velit eligendi quaerat ipsa. Accusamus nobis tenetur enim alias.Nesciunt nihil quis dicta dignissimos veniam. Molestias facilis amet eveniet ipsa consequuntur, ad aspernatur? Accusamus sequi dolor enim culpa repellendus quisquam eaque dolorum similique nemo eos aut, dolores ex ipsam?',
      date: String(new Date()),
      link: 'blog',
      categoryName: 'frontend',
    },
    {
      id: 14,
      title: 'Angular Eğitimi -14',
      picture:
        'https://cdn.pixabay.com/photo/2024/02/09/13/03/beach-8563083_1280.jpg',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus molestias assumenda, quisquam possimus iste quidem. Tenetur voluptatem dolorum vero, dolores id distinctio minus officiis. Natus ex reiciendis consectetur ab deleniti.Corrupti, facere necessitatibus nostrum unde maiores labore quos! Consequuntur inventore quia, facilis voluptatibus eligendi ipsam ullam consectetur alias odit, iste illum eaque in sequi aliquam, est vitae voluptatem deserunt modi.Itaque rerum dignissimos quidem. Aspernatur asperiores ipsum blanditiis voluptatibus porro distinctio, dicta veniam vero excepturi dolore quasi culpa repudiandae iure, nobis velit eligendi quaerat ipsa. Accusamus nobis tenetur enim alias.Nesciunt nihil quis dicta dignissimos veniam. Molestias facilis amet eveniet ipsa consequuntur, ad aspernatur? Accusamus sequi dolor enim culpa repellendus quisquam eaque dolorum similique nemo eos aut, dolores ex ipsam?',
      date: String(new Date()),
      link: 'blog',
      categoryName: 'backend',
    },
  ];
}