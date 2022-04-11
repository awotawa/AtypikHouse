<?php

namespace App\Controller;

use App\Repository\LodgingRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

class ApiPostController extends AbstractController
{
    #[Route('/api/lodging', name: 'app_api_post_index', methods: ['GET'])]
    public function index(LodgingRepository $lodgingRepository, SerializerInterface $serializer): Response
    {
        $lodgings = $lodgingRepository->findAll();
        // dd($lodgings); # dumping the data

        # Normalization of data => transform complex data (objets) into tableaux associatifs simple using Normalization method
        # Encoding => transform tableaux associatifs into simple text using json_encode method
        # Serialization process is the process encompassing the 2 above

        // $normalizedLodgings = $normalizer->normalize($lodgings);

        // $json = json_encode($normalizedLodgings);

        $json = $serializer->serialize($lodgings, 'json');

        // $response = new Response($json, 200, [
        //   "Content-type" => "application/json"
        // ]);

        $response = new JsonResponse($json, 200, [], true);

        // $response = this->json($lodgings, 200, [], []); #json method inherited from AbstractController

        return $response;
    }
}
