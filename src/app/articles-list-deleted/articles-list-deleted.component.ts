import { Component, OnInit } from '@angular/core';
import { Article } from '../common/article';
import { ArticleService } from '../common/article.service';

@Component({
  selector: 'app-articles-list-deleted',
  templateUrl: './articles-list-deleted.component.html',
  styleUrls: ['./articles-list-deleted.component.css']
})
export class ArticlesListDeletedComponent implements OnInit {
  // Liste des articles non disponnible
  articlesDeleted: Article[];

  constructor(private service: ArticleService) { }

  ngOnInit() {
    this.articlesDeleted = this.service.getDeleted();
  }

  /**
   * Restaure un article supprimé
   */
  restore() {
    // TODO réstauration de l'article à partir d'un service
  }
}
