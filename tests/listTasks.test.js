/* eslint-disable max-lines-per-function */
/* eslint-disable mocha/no-mocha-arrows */
const sinon = require('sinon');
const { expect } = require('chai');

const { beforeEach, afterEach } = require('mocha');
const tasksController = require('../src/api/controllers');
const tasksService = require('../src/api/services');

describe('1 - Ao chamar o controller de listar tarefas:', () => {
  const response = {};
  const request = {};

    beforeEach(() => {
      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();
      
      sinon.stub(tasksService, 'list')
      .resolves(false);
    });

    afterEach(() => {
      tasksService.list.restore();
    });

  describe('Quando a requisão é bem sucedida:', () => {
    it('Retorna status 200.', async () => {
      await tasksController.list(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  
    it('Retorna um objeto com todas as tarefas.', async () => {
      await tasksController.list(request, response);

      expect(response.json.calledWith(sinon.match.object)).to.be.equal(true); 
    });
  });

  describe('Quando a requisão é mal sucedida:', () => {
    it('Retorna status 400.', async () => {
      await tasksController.list(request, response);

      expect(response.status.calledWith(400)).to.be.equal(true);
    });
  
    it('Retorna mensagem de erro.', async () => {
      await tasksController.list(request, response);

      expect(response.json.calledWith({ message: 'Server Error.' })).to.be.equal(true);
    });
  });
});
