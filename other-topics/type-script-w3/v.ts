import { IsInt, IsString, Length, Min, Max, validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

class User {
    @IsString()
    @Length(2, 20)
    name: string;

    @IsInt()
    @Min(1)
    @Max(100)
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

async function validateUser() {
    const user = plainToClass(User, { name: 'John Doe', age: 30 });

    const errors = await validate(user);
    if (errors.length > 0) {
        console.log('Validation failed. Errors: ', errors);
    } else {
        console.log('Validation succeed: ', user);
    }
}

validateUser();
