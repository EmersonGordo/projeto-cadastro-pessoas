
using PessoasApi.Models;
using PessoasApi.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;



namespace PessoasApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
     public class PessoaController  : ControllerBase
    {
         private readonly PessoaService _pessoaServico;

        public PessoaController(PessoaService pessoaservico)
        {
            _pessoaServico = pessoaservico;
        }


        [HttpGet]
        public ActionResult<List<mPessoa>> Get() =>
            _pessoaServico.Get();



        [HttpGet("{id:length(24)}", Name = "GetPessoa")]
        public ActionResult<mPessoa> Get(string id)
        {
            var pessoa = _pessoaServico.Get(id);

            if (pessoa == null)
            {
                return NotFound();
            }

            return pessoa;
        }

        [HttpPost]
        public ActionResult<mPessoa> Create(mPessoa pessoa)
        {
            _pessoaServico.Create(pessoa);

            return CreatedAtRoute("GetPessoa", new { id = pessoa.Id.ToString() }, pessoa);
        }


        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, mPessoa pessoaIn)
        {
            var pessoa = _pessoaServico.Get(id);

            if (pessoa == null)
            {
                return NotFound();
            }

            _pessoaServico.Update(id, pessoaIn);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var pessoa = _pessoaServico.Get(id);

            if (pessoa == null)
            {
                return NotFound();
            }

            _pessoaServico.Remove(pessoa.Id);

            return NoContent();
        }

    }
}