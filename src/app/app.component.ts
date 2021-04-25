import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },

    {
      title: 'At the Mountain',
      url: 'https://images.unsplash.com/photo-1560759995-d237fb70a79d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vdW50YWlufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },

    {
      title: 'At the Sky',
      url: 'https://images.unsplash.com/photo-1488866022504-f2584929ca5f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8c2t5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },

    {
      title: 'At the Forest',
      url: 'https://images.unsplash.com/photo-1456030680012-9aa5bd962cc4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDF8fGZvcmVzdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },

    {
      title: 'At the City',
      url: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },

    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },

    {
      title: 'At the Mountain',
      url: 'https://images.unsplash.com/photo-1560759995-d237fb70a79d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vdW50YWlufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },

    {
      title: 'At the Sky',
      url: 'https://images.unsplash.com/photo-1488866022504-f2584929ca5f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8c2t5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },

    {
      title: 'At the Forest',
      url: 'https://images.unsplash.com/photo-1456030680012-9aa5bd962cc4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDF8fGZvcmVzdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },

    {
      title: 'At the City',
      url: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },

    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },

    {
      title: 'At the Mountain',
      url: 'https://images.unsplash.com/photo-1560759995-d237fb70a79d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vdW50YWlufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },

    {
      title: 'At the Sky',
      url: 'https://images.unsplash.com/photo-1488866022504-f2584929ca5f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8c2t5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },

    {
      title: 'At the Forest',
      url: 'https://images.unsplash.com/photo-1456030680012-9aa5bd962cc4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDF8fGZvcmVzdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },

    {
      title: 'At the City',
      url: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },

    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },

    {
      title: 'At the Mountain',
      url: 'https://images.unsplash.com/photo-1560759995-d237fb70a79d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vdW50YWlufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },

    {
      title: 'At the Sky',
      url: 'https://images.unsplash.com/photo-1488866022504-f2584929ca5f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8c2t5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },

    {
      title: 'At the Forest',
      url: 'https://images.unsplash.com/photo-1456030680012-9aa5bd962cc4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDF8fGZvcmVzdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },

    {
      title: 'At the City',
      url: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
  ];

  windowCheck(index: number){
    return Math.abs(this.currentPage - index) < 5;
  }
}
