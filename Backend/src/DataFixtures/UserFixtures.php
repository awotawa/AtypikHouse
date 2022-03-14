<?php

namespace App\DataFixtures;

use App\Entity\User;
use DateTime;
use DateTimeInterface;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class UserFixtures extends Fixture
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

    $user1 = new User();
    $user1->setFirstName("Billy");
    $user1->setLastName("Smith");
    $user1->setEmail("Billy.smith@yopmail.com");
    $user1->setRoles(["ROLE_ADMIN"]);
    $user1->setPassword("azertyuiop");
    $user1->setPhoto("https://randomuser.me/api/portraits/men/67.jpg");

    $user2 = new User();
    $user2->setFirstName("John");
    $user2->setLastName("Wayne");
    $user2->setEmail("john.wayne@yopmail.com");
    $user2->setRoles(["ROLE_USER"]);
    $user2->setPassword("azertyuiop");
    $user2->setPhoto("https://randomuser.me/api/portraits/men/68.jpg");

    $manager->flush();
  }
}
