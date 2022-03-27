<?php

namespace App\DataFixtures;

use App\Entity\Property;
use App\Entity\User;
use App\Entity\Owner;
use App\Entity\Category;
use App\Entity\Lodging;
use App\Entity\LodgingValue;
use DateTime;
use DateTimeInterface;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class LodgingValuesFixtures extends Fixture
{

  public function load(ObjectManager $manager)
  {

    $lodging  = new Lodging();
    $owner    = new Owner();
    $user     = new User();
    $category = new Category();
    $property = new Property();
    $lodgingValue = new LodgingValue();


    $user->setFirstName("Jean");
    $user->setLastName("Charles");
    $user->setPhoto("Jean");
    $user->setPhoto("https://randomuser.me/api/portraits/men/66.jpg");
    $user->setEmail("john.smith@yopmail.com");
    $user->setPassword("azertyuiop");
    $user->setRoles(['ROLE_USER']);
    $manager->persist($user);

    $owner->setUserId($user);
    $manager->persist($owner);

    $category->setType("myType");
    $category->setCreatedAt(new DateTime('03/14/2022'));
    $category->setUpdatedAt(new DateTime('03/15/2022')); 
    $manager->persist($category);

    $lodging->setOwnerId($owner);
    $lodging->setCategoryId($category);    
    $lodging->setName("Châlet Albert");
    $lodging->setRate(200);
    $lodging->setLodgingDescription("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, unde? Soluta repellendus ducimus, sit, dicta vero iste culpa, exercitationem fugiat alias aut nesciunt esse! Nam laborum hic iure asperiores aliquam.");
    $lodging->setAdress("Annecy, Auvergne-Rhône-Alpe");
    $lodging->setCheckInTime(new \DateTime('15:52:01+00:00'));
    $lodging->setCreatedAt(new \DateTime('03/14/2022'));
    $lodging->setUpdatedAt(new \DateTime('03/15/2022'));
    $manager->persist($lodging);

    $property->setCategoryId($category);
    $property->setNewField("Hauteur Sol");
    $property->setDefaultValue("13 mètre");
    $property->setCreatedAt(new DateTime('03/14/2022'));
    $property->setUpdatedAt(new DateTime('03/15/2022')); 
    $manager->persist($property);

    $lodgingValue->setPropertyId($this->property);
    $lodgingValue->setLodgingId($this->lodging);
    $lodgingValue->setValue("myValue");
    $lodgingValue->setCreatedAt(new DateTime('03/14/2022'));
    $lodgingValue->setUpdatedAt(new DateTime('03/15/2022')); 
    $manager->persist($lodgingValue);
    // var_dump($lodging);

    $manager->flush();
  }
}
