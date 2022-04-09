import { HttpHrmService } from './../http/http-hrm.service';
import { ApiService } from './../../common/services/api/api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpHrmService,
    private api: ApiService,
  ) { }

  /**
   * Get posts for datatable from API
   * @param void
   * @returns Promise<any>
   */
  async getPosts(dataTablesParameters: any): Promise<any> {
    return await this.http.post(this.api.posts.getPosts, dataTablesParameters, false);
  }

  /**
   * Get posts from API
   * @param void
   * @returns Promise<any>
   */
   async getPostsUnfiltered(): Promise<any> {
    return await this.http.get(this.api.posts.posts, false);
  }

  /**
   * New post from API
   * @param void
   * @returns Promise<any>
   */
   async newPost(data: any): Promise<any> {
    return await this.http.post(this.api.posts.posts, data, true);
  }

  /**
   * Update post from API
   * @param void
   * @returns Promise<any>
   */
   async updatePost(id:string, data: any): Promise<any> {
    return await this.http.put(this.api.posts.posts, id, data, true);
  }

  /**
   * Delete post from API
   * @param void
   * @returns Promise<any>
   */
   async deletePost(id:string): Promise<any> {
    return await this.http.delete(this.api.posts.posts, id, true);
  }

  /**
   * Import posts data as bulk
   * from Excel/CSV
   *
   * @param data postsData
   * @returns Promise<any>
   */
   async importData(data: any[]): Promise<any> {
    let posts: any[] = [];
    data.forEach(datum => {
      posts.push({
        name: datum.post_name
      });
    });

    return await this.http.post(this.api.posts.importPosts, {
      postsData: posts
    }, true);
  }
}
