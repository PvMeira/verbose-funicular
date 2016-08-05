package com.tecnon.application.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tecnon.domain.entity.State;
import com.tecnon.domain.repository.StateRepository;

@RestController
@RequestMapping(path = "/states")
public class StateResource extends AbstractCrudResource<State, Long> {
	@Autowired
	private StateRepository cityRepository;

	public StateResource(StateRepository stateRepository) {
		super(stateRepository);
		this.cityRepository = stateRepository;
	}

}
