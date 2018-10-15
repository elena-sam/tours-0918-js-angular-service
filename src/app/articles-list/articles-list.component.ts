import { Component, OnInit } from '@angular/core';
import { Article } from '../common/article';
import { ArticleService } from '../common/article.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  // Model de donée d'un article
  article: Article;
  // Liste des articles disponnible
  articles: Article[];

  constructor(private service: ArticleService) {}

  ngOnInit() {
    // Récupération des articles à partir du local storage
    this.articles = this.service.articles;
    // Initialisation du model de donnée
    this.article = new Article();
  }

  /**
   * Création d'un nouvel article
   * @param article Nouvel article
   */
  createArticle(article) {
    // Ajout de l'article à la liste des articles
    this.service.create(article);
    // Réinitialisation du model
    this.article = new Article();
  }

  /**
   * Suppréssion d'un article
   * @param article Article à supprimer
   */
  deleteArticle(article: Article) {
    this.service.delete(article);
  }
}
