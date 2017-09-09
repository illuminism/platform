import { Controller, Get, HttpStatus, Post, Response } from '@nestjs/common';
import { PeopleService } from './people.service';

@Controller('people')
export class PeopleController {
  constructor(private peopleService: PeopleService) {
  }

  @Get()
  public async getAllPeople(@Response() res) {
    const users = await this.peopleService.getAllPeople();
    res.status(HttpStatus.OK).json(users);
  }

  @Get('/:id')
  public getPerson() {
    // stub
  }

  @Post('')
  public addPerson() {
    // stub
  }
}
