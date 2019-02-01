import { Injectable } from '@angular/core';
import { Article } from '../common/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articles: Article[];
  articlesDeleted: Article[];
  constructor() {

    this.articles = this.getFromLocalStorage();
}

  /**
 * Récupération du tableau d'articles stocké dans le local storage
 */
  getFromLocalStorage(): Article[] {
    // Récupération des articles de format 'string'
    const stringData = localStorage.getItem('articles');
    // Conversion des données de type 'string' en objet Javascript
    const articles: Article[] = JSON.parse(stringData);

    return articles;
  }

  getDelFromLocalStorage(): Article[] {
    // Récupération des articles supprimés de format 'string'
    const stringData = localStorage.getItem('articlesDeleted');
    // Conversion des données de type 'string' en objet Javascript
    const articles: Article[] = JSON.parse(stringData);
    return articles;
  }

  saveToLocalStorage(articles) {
    const data = JSON.stringify(articles);
    localStorage.setItem('articles', data);
  }

  /**
 * Création d'un nouvel article et ajout au tableau
 * @param article Nouvelle article
 */
  createArticle(element) {
    // Ajout de l'article à la liste des articles
    this.articles.push(element);
    this.saveToLocalStorage(this.articles);
    return this.articles;
  }

  /**
   * Suppression d'un article
   * @param article Article à supprimer
   */
  deleteArticle(article: Article) {
    // Récupération de l'index de l'article à supprimer
    const index = this.articles.findIndex(x => x.id === article.id);
    // Ajout de l'article à supprimer au tableau des éléments supprimés
    const deleted = this.articles.splice(index, 1);
    if (localStorage.articlesDeleted) {
      this.articlesDeleted = this.getDelFromLocalStorage();
      console.log(typeof this.articlesDeleted);
      this.articlesDeleted.push(deleted[0]);
    } else {
      const data = JSON.stringify(deleted);
      localStorage.setItem('articlesDeleted', data);
    }
    // Suppression de l'article du tableau

    this.saveToLocalStorage(this.articles);
    return this.articles;
  }

  getDeleted(): Article[] {
    return this.articlesDeleted;
  }
}
