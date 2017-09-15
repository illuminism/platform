import { Component } from '@nestjs/common';
import { HttpException } from '@nestjs/core';
import { Person } from '../../index';


@Component()
export class PeopleService {

  public async getAllPeople():Promise<any> {
    return {data: await Person.find()};
  }

  public getPeople(id: number) {
    // const isDefined = (item) => {
    //   if (!item) {
    //     throw new HttpException(`${item} not found`, 404);
    //   }
    //   return item;
    // };
    //
    // const person = isDefined(this.people.find((p) => p.id === id));
    // return Promise.resolve(person);
  }

  public addPerson(req) {
    const _person = new Person(req);
    _person.save((err) => {
      if (err) {
        console.error('did not save');
        return false;
      }
      console.info('saveddded');
      return Promise.resolve();
    });
  }
}
