<?php

namespace App\Tests;

use DateTime;
use App\Entity\User;
use App\Tests\Entity\tools\AssertEntityTrait;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class ArticleTest extends KernelTestCase
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
      // ->setCreatedAt(new \DateTime('2005-08-15T15:52:01+00:00'))
      // ->setCreatedAt(new \DateTime('2005-08-15T15:52:01+00:00'))
      // ->setIsVerified(true)
      ->setPassword("azertyuiop");

  }

  public function testValidUser(): void
  {
    $this->assertHasErrors($this->user, 0);
  }
}
