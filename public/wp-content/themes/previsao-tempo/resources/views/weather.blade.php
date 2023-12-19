{{--
  Template Name: Previsão do tempo Template
--}}

@extends('layouts.app')

@section('content')
  @include('partials.weather-container')
  @include('partials.additional-weather-info')
@endsection
