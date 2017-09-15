import { Body, Controller, Get, HttpStatus, Post, Response } from '@nestjs/common';
import { PeopleService } from './people.service';

@Controller('people')
export class PeopleController {
  constructor(private peopleService: PeopleService) {
  }

  @Get()
  public getAllPeople(@Response() res) {
    this.peopleService.getAllPeople().then(people => {
      return res.status(HttpStatus.OK).json(people);
    });
  }

  @Get('/:id')
  public getPerson() {
    // stub
  }

  @Post()
  public async addPerson(@Response() res, @Body() person) {
    const msg = await this.peopleService.addPerson(person);
    return res.status(HttpStatus.CREATED).json(msg)
  }
}
