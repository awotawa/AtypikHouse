<?php

namespace App\Tests;

use DateTime;
use App\Entity\User;
use App\Tests\Entity\tools\AssertEntityTrait;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class UserTest extends KernelTestCase
{
  use AssertEntityTrait;

  //This will launch before every tests
  public function setUp(): void
  {

    $this->user = (new User())
      ->setFirstName("John")
      ->setLastName("Smith")
      ->setPhoto("https://randomuser.me/api/portraits/men/66.jpg")
      ->setEmail("john.smith@yopmail.com")
      ->setPassword("azertyuiop");
      // ->setCreatedAt(new \DateTime('2005-08-15T15:52:01+00:00'))
      // ->setCreatedAt(new \DateTime('2005-08-15T15:52:01+00:00'))
      // ->setIsVerified(true)

  }

  public function testValidUser(): void
  {
    $this->assertHasErrors($this->user, 0);
  }

  //FIRST_NAME TESTING
  // Blank first_name
  public function testFirstNameBlankUser(): void
  {
    $this->assertHasErrors($this->user->setFirstName(""), 2, 'first_name', 'This value should not be blank.');
    $this->assertHasErrors($this->user->setFirstName(""), 2, 'first_name', 'Your first name must be at least 2 characters long');
  }

  // Wrong type first_name
  public function testFirstNameWrongTypeUser(): void
  {
    $this->assertHasErrors($this->user->setFirstName(42), 1, 'first_name', 'This value should not be a string.');
  }

  // Too short first_name
  public function testFirstNameTooShortUser(): void
  {
    $this->assertHasErrors($this->user->setFirstName("A"), 1, 'first_name', 'Your first name must be at least 2 characters long');
  }

  // Too long first_name
  public function testFirstNameTooLongUser(): void
  {
    $this->assertHasErrors($this->user->setFirstName("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaAAAAAA"), 1, 'first_name', 'Your first name cannot be longer than 255 characters');
  }

  // Invalid characters first_name

  //LAST_NAME TESTING
  // Blank last_name
  // public function testLastNameBlankUser(): void
  // {
  //   $this->assertHasErrors($this->user->setLastName(""), 2, 'last_name', 'This value should not be blank.');
  //   $this->assertHasErrors($this->user->setLastName(""), 2, 'last_name', 'Your last name must be at least 2 characters long');
  // }
  // Wrong type last_name
  // Too short last_name
  // Too long last_name
  // Invalid characters last_name

  //EMAIL TESTING
  // Blank email
  // Wrong pattern email

  //PASSWORD TESTING
  // Blank password
  // Too short password

  //PHOTO TESTING
  // No photo
  // Wrong format photo
}
