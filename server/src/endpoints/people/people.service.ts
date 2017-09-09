import { Component } from '@nestjs/common';
import { HttpException } from '@nestjs/core';

@Component()
export class PeopleService {
  private people = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Alice Caeiro'},
    {id: 3, name: 'Who Knows'},
  ];

  public getAllPeople() {
    return Promise.resolve(this.people);
  }

  public getPeople(id: number) {
    const isDefined = (item) => {
      if (!item) {
        throw new HttpException(`${item} not found`, 404);
      }
      return item;
    };

    const person = isDefined(this.people.find((p) => p.id === id));
    return Promise.resolve(person);
  }

  public addPerson(person) {
    this.people.push(person);
    return Promise.resolve();
  }
}
