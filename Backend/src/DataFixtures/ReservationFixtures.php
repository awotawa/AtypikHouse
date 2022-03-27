<?php

namespace App\DataFixtures;

use DateTime;
use App\Entity\User;
use App\Entity\Owner;
use DateTimeInterface;
use App\Entity\Lodging;
use App\Entity\Reservation;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class ReservationFixtures extends Fixture
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

    $user1 = new User();
    $user1->setFirstName("John");
    $user1->setLastName("Wayne");
    $user1->setEmail("john.wayne@yopmail.com");
    $user1->setRoles(["ROLE_ADMIN"]);
    $user1->setPassword("azertyuiop");
    $user1->setPhoto("https://randomuser.me/api/portraits/men/68.jpg");

    $lodging = new Lodging();
    $lodging->setName("Châlet Albert");
    $lodging->setRate(200);
    $lodging->setLodgingDescription("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, unde? Soluta repellendus ducimus, sit, dicta vero iste culpa, exercitationem fugiat alias aut nesciunt esse! Nam laborum hic iure asperiores aliquam.");
    $lodging->setAdress("Annecy, Auvergne-Rhône-Alpe");
    $lodging->setCheckInTime(new \DateTime('13:00:00+00:00'));
    $lodging->setCreatedAt(new DateTime('03/20/2022'));
    $lodging->setUpdatedAt(new DateTime('03/20/2022'));
    $lodging->setOwnerId($owner0);
    $manager->persist($lodging);
    // var_dump($lodging);

    $reservation0 = new Reservation();
    $reservation0->setPrice(600);
    $reservation0->setCreatedAt(new DateTime('03/20/2022'));
    $reservation0->setUpdatedAt(new DateTime('03/20/2022'));
    $reservation0->setUserId($user1);
    $reservation0->setLodgingId($lodging);
    $reservation0->setStartDate(new DateTime('03/20/2022'));
    $reservation0->setEndDate(new DateTime('03/23/2022'));
    $reservation0->setPaid(true);
    $manager->persist($reservation0);


    $reservation1 = new Reservation();
    $reservation1->setPrice(800);
    $reservation1->setCreatedAt(new DateTime('03/20/2022'));
    $reservation1->setUpdatedAt(new DateTime('03/20/2022'));
    $reservation1->setUserId($user1);
    $reservation1->setLodgingId($lodging);
    $reservation1->setStartDate(new DateTime('03/26/2022'));
    $reservation1->setEndDate(new DateTime('03/30/2022'));
    $reservation1->setPaid(false);
    $manager->persist($reservation1);

    $manager->flush();
  }
}
