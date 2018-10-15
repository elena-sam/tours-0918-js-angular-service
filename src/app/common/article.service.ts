import { Injectable } from '@angular/core';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  // Liste des articles
  articles: Article[];
  // Liste des articles supprimé
  articlesDeleted: Article[];

  constructor() {
    // Récupération des articles à partir du local storage
    this.articles = this.getFromLocalStorage();
    // Initialisation du tableau d'article supprimé
    this.articlesDeleted = [];
  }

  /**
   * Ajout d'un nouvel article à la liste
   * @param article Article à ajouter
   */
  create(article: Article) {
    this.articles.push(article);
  }

  /**
   * Retire un article de la liste et l'ajoute à la liste des éléments supprimés
   * @param article Article à supprimer
   */
  delete(article: Article) {
    // Récupération de l'index de l'article à supprimer
    const index = this.articles.findIndex(x => x.id === article.id);
    // Suppréssion de l'article du tableau
    const deleted = this.articles.splice(index, 1);
    // Mise à jour du tableau d'article supprimé
    this.articlesDeleted.push(deleted[0]);
  }

  /**
   * Restaure un élément supprimé
   * @param article Article à restauré
   */
  restore(article: Article) {
    const index = this.articlesDeleted.findIndex(x => x.id === article.id);

    const deleted = this.articlesDeleted.splice(index, 1);

    this.articles.push(deleted[0]);
  }

  /**
   * Récupération du tableau d'articles stocké dans le local storage
   */
  getFromLocalStorage(): Article[] {
    // Récupération des artciles en format 'string'
    const stringData = localStorage.getItem('articles');
    // Converstion des données de type 'string' en objet Javascript
    const articles = JSON.parse(stringData);

    return articles;
  }

}
