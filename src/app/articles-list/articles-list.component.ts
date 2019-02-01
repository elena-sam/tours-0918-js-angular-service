import { Component, OnInit } from '@angular/core';
import { Article } from '../common/article';
import { ArticleService } from '../common/article.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css'],
  providers: [ArticleService],
})
export class ArticlesListComponent implements OnInit {
  // Model de donée d'un article
  article: Article;
  // Liste des articles disponnible
  articles: Article[];

  constructor(private service: ArticleService) {}

  ngOnInit() {
    // Récupération des articles à partir du local storage
    this.articles = this.service.getFromLocalStorage();
    // Initialisation du model de donnée
    this.article = new Article();
  }

  /**
   * Création d'un nouvel article et ajout au tableau
   * @param article Nouvelle article
   */
  createArticle() {
    this.articles = this.service.createArticle(this.article);
    // Réinitialisation du model
    this.article = new Article();
  }

  /**
   * Suppression d'un article
   * @param article Article à supprimer
   */
  deleteArticle(article) {
    this.articles = this.service.deleteArticle(article);
  }
}
