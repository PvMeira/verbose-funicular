package com.tecnon.domain.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.tecnon.domain.entity.State;

@Repository
public interface StateRepository extends CrudRepository<State, Long> {

}
