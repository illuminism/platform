import { Component } from '@nestjs/common';
import { Person } from './person';


@Component()
export class PeopleService {

  public async getAllPeople():Promise<any> {
    const p = await Person;
    return {data: await p.find()};
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
    // const _person = new Person(req);
    // _person.save((err) => {
    //   if (err) {
    //     console.error('did not save');
    //     return false;
    //   }
    //   console.info('saveddded');
    //   return Promise.resolve();
    // });
  }
}
