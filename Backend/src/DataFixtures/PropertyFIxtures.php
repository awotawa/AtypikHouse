<?php

namespace App\DataFixtures;

use App\Entity\Category;
use App\Entity\Property;
use DateTime;
use DateTimeInterface;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class PropertyFixtures extends Fixture
{

  public function load(ObjectManager $manager)
  {

    $category = new Category();
    $property = new Property();

    $category->setType("myType");
    $category->setCreatedAt(new DateTime('03/14/2022'));
    $category->setUpdatedAt(new DateTime('03/15/2022')); 
    $manager->persist($category);


    $property->setCategoryId($category);
    $property->setNewField("Hauteur Sol");
    $property->setDefaultValue("13 mètre");
    $property->setCreatedAt(new DateTime('03/14/2022'));
    $property->setUpdatedAt(new DateTime('03/15/2022')); 
    $manager->persist($property);
    
    // var_dump($lodging);

    $manager->flush();
  }
}
