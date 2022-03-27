<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Entity\Owner;
use DateTime;
use DateTimeInterface;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class OwnerFixtures extends Fixture
{

  public function load(ObjectManager $manager)
  {

    $user0 = new User();
    $user0->setFirstName("John");
    $user0->setLastName("Smith");
    $user0->setEmail("john.smith@yopmail.com");
    $user0->setRoles(["ROLE_USER"]);
    $user0->setPassword("azertyuiop");
    $user0->setPhoto("https://randomuser.me/api/portraits/men/66.jpg");

    $owner0 = new Owner();
    $owner0->setUserId($user0);

    $user2 = new User();
    $user2->setFirstName("John");
    $user2->setLastName("Wayne");
    $user2->setEmail("john.wayne@yopmail.com");
    $user2->setRoles(["ROLE_ADMIN"]);
    $user2->setPassword("azertyuiop");
    $user2->setPhoto("https://randomuser.me/api/portraits/men/68.jpg");

    $owner1 = new Owner();
    $owner1->setUserId($user2);

    $manager->flush();
  }
}
