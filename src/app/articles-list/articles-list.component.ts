import { Component, OnInit } from '@angular/core';
import { Article } from '../common/article';

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

  constructor() {}

  ngOnInit() {
    // Récupération des articles à partir du local storage
    this.articles = this.getFromLocalStorage();
    // Initialisation du model de donnée
    this.article = new Article();
  }

  /**
   * Création d'un nouvel article et ajout au tableau
   * @param article Nouvelle article
   */
  createArticle(article) {
    // Ajout de l'article à la liste des articles
    this.articles.push(article);
    // Réinitialisation du model
    this.article = new Article();
  }

  /**
   * Suppréssion d'un article
   * @param article Article à supprimer
   */
  deleteArticle(article: Article) {
    // Récupération de l'index de l'article à supprimer
    const index = this.articles.findIndex( x => x.id === article.id);
    // Suppréssion de l'article du tableau
    this.articles.splice(index, 1);
  }

  /**
   * Récupération du tableau d'articles stocké dans le local storage
   */
  getFromLocalStorage(): Article[] {
    // Récupération des artciles en format 'string'
    const stringData = localStorage.getItem('articles');
    // Converstion des données de type 'string' en objet Javascript
    const articles: Article[] = JSON.parse(stringData);

    return articles;
  }
}
